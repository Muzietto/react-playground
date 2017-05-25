(function() {
  'use strict';

  define([
      './reducers/mainReducer',
      './actions/actions',
      './initStore',
      'chai'
    ], function(defaultReducer, actions, initStore, chai) {
    var expect  = chai.expect,
    reducer = defaultReducer.mainReducer,
    ActionCreators = actions.ActionCreators,
    store = initStore.store
    ;

    describe('in the wonderful world of redux', function() {
      describe('the main reducer', function() {
        beforeEach(() => { this.state = THE_STATE()
          this.temp = window.alert;
          window.alert = (() => {
            var received = '';
            return (msg) => {
              received = msg;
              window.alert = () => received;
            }
          })();
        });
        afterEach(() => {
          window.alert = this.temp;        
        });
        it('can alert humans without modifying state', function() {
          var state = {test:12};
          var action = ActionCreators.alertUser('test message');
          expect(reducer(state, action)).to.be.eql(state);
          expect(window.alert()).to.be.eql('ALERT_USER: test message');
        });
        it('can create users, updating the administration to handle them', () => {
          expect(this.state.users.length).to.be.equal(4);
          expect(Object.keys(this.state.user_group).length).to.be.equal(5); // it contains also fake key 0
          var action = ActionCreators.userIsCreated(5, 'test5');
          var endState = reducer(this.state, action);
          expect(endState.users.length).to.be.eql(5);
          expect(Object.keys(endState.user_group).length).to.be.equal(6);
          expect(endState.user_group[5]).to.be.eql([]);
        });
        it('can create groups, updating the administration to handle them', () => {
          expect(this.state.groups.length).to.be.equal(4);
          expect(Object.keys(this.state.group_user).length).to.be.equal(5); // it contains also fake key 0
          expect(Object.keys(this.state.group_no_user).length).to.be.equal(5); // it contains also fake key 0
          var action = ActionCreators.groupIsCreated(5, 'test5');
          var endState = reducer(this.state, action);
          expect(endState.groups.length).to.be.eql(5);
          expect(Object.keys(endState.group_user).length).to.be.equal(6);
          expect(endState.group_user[5]).to.be.eql([]);
          expect(Object.keys(endState.group_no_user).length).to.be.equal(6);
          expect(endState.group_no_user[5]).to.be.eql([1,2,3,4]);
        });
        it('can let users enter groups, modifying the whole administration accordingly', () => {
          expect(this.state.user_group[1]).to.be.eql([1,2]);
          expect(this.state.group_user[3]).to.be.eql([]);
          expect(this.state.group_no_user[3]).to.be.eql([1,2,3,4]);
          var action = ActionCreators.userEntersGroup(1, 3); // u1 enters g3
          var endState = reducer(this.state, action);
          expect(endState.user_group[1]).to.be.eql([1,2,3]);
          expect(endState.group_user[3]).to.be.eql([1]);
          expect(endState.group_no_user[3]).to.be.eql([2,3,4]);
        });
        it('can let users exit groups, modifying the whole administration accordingly', () => {
          expect(this.state.user_group[1]).to.be.eql([1,2]);
          expect(this.state.group_user[2]).to.be.eql([1]);
          expect(this.state.group_no_user[2]).to.be.eql([2,3,4]);
          var action = ActionCreators.userLeavesGroup(1, 2); // u1 leaves g2
          var endState = reducer(this.state, action);
          expect(endState.user_group[1]).to.be.eql([1]);
          expect(endState.group_user[2]).to.be.eql([]);
          expect(endState.group_no_user[2]).to.be.eql([2,3,4,1]);
        });
        it('can delete users, updating the administration to forget about them', () => {
          expect(this.state.users.length).to.be.equal(4);
          expect(Object.keys(this.state.user_group).length).to.be.equal(5); // it contains also fake key 0
          var action = ActionCreators.userIsDeleted(4);
          var endState = reducer(this.state, action);
          expect(endState.users.length).to.be.eql(3);
          expect(Object.keys(endState.user_group).length).to.be.equal(4);
          expect(endState.user_group[4]).to.be.undefined;
        });
        it('can delete groups, updating the administration to forget about them', () => {
          expect(this.state.groups.length).to.be.equal(4);
          expect(Object.keys(this.state.group_user).length).to.be.equal(5); // it contains also fake key 0
          expect(Object.keys(this.state.group_no_user).length).to.be.equal(5); // it contains also fake key 0
          var action = ActionCreators.groupIsDeleted(4);
          var endState = reducer(this.state, action);
          expect(endState.groups.length).to.be.eql(3);
          expect(Object.keys(endState.group_user).length).to.be.equal(4);
          expect(endState.group_no_user[4]).to.be.undefined;
          expect(Object.keys(endState.group_no_user).length).to.be.equal(4);
          expect(endState.group_no_user[4]).to.be.undefined;
        });
      });
      describe('the middleware chain', () => {
        beforeEach(() => { 
          this.temp = window.alert;
          window.alert = (() => {
            var received = '';
            return (msg) => {
              received = msg;
              window.alert = () => received;
            }
          })();
        });
        afterEach(() => {
          window.alert = this.temp;        
        });
        describe('will forbid the deletion', () => {
          it('of users still belonging to groups', () => {
            var action = ActionCreators.userIsDeleted(1);
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.users.length).to.be.eql(4);
            expect(window.alert().indexOf('cannot delete user')).to.be.at.least(0);
          });
          it('of groups containing still members', () => {
            var action = ActionCreators.groupIsDeleted(1);
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.groups.length).to.be.eql(4);
            expect(window.alert().indexOf('cannot delete group')).to.be.at.least(0);
          });
        });
        describe('will avoid the creation of duplicate groups', () => {
          it('by checking the ids', () => {
            var action = ActionCreators.groupIsCreated(1, 'again1');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.groups.length).to.be.eql(4);
            expect(window.alert().indexOf('duplicate group')).to.be.at.least(0);
          });
          it('by checking the names', () => {
            var action = ActionCreators.groupIsCreated(123, 'Music');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.groups.length).to.be.eql(4);
            expect(window.alert().indexOf('duplicate group')).to.be.at.least(0);
          });
        });
        describe('will avoid the creation of duplicate users', () => {
          it('by checking the ids', () => {
            var action = ActionCreators.userIsCreated(1, 'again1');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.users.length).to.be.eql(4);
            expect(window.alert().indexOf('duplicate user')).to.be.at.least(0);
          });
          it('by checking the names', () => {
            var action = ActionCreators.userIsCreated(123, 'Armando');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.users.length).to.be.eql(4);
            expect(window.alert().indexOf('duplicate user')).to.be.at.least(0);
          });
        });
        describe('will parseInt strings containing digits', () => {
          it('in the case of user ids', () => {
            var action = ActionCreators.userIsCreated('1', 'Arrigo');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.users.length).to.be.eql(4);
          });
          it('in the case of group ids', () => {
            var action = ActionCreators.groupIsCreated('1', 'Piano');
            store.dispatch(action);
            var endState = store.getState();
            expect(endState.groups.length).to.be.eql(4);
          });
        });
      });
    });
    function THE_STATE() {
      return {
        users: [
          {name: 'Armando', id: 1},
          {name: 'Bruno', id: 2},
          {name: 'Carlo', id: 3},
          {name: 'Daniele', id: 4},
        ],
        groups: [
          {name: 'Music', id: 1},
          {name: 'Dance', id: 2},
          {name: 'Jogging', id: 3},
          {name: 'Cycling', id: 4},
        ],
        user_group: {
          0: [],
          1: [1,2],
          2: [],
          3: [],
          4: [1,4]
        },
        group_user: {
          0: [],
          1: [1,4],
          2: [1],
          3: [],
          4: [4]
        },
        group_no_user: {
          0: [],
          1: [2,3],
          2: [2,3,4],
          3: [1,2,3,4],
          4: [1,2,3]
        },
        mappers: {},
      };
    };
  });
})();