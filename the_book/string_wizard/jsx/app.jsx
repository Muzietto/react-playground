'use strict';
import comms from 'comms.es6';
import wrapper from 'input_wrapper.es6';
import aggregator from 'aggregator.es6';

var test_url = 'http://dev.dev103.social-net.me:8081' +
    '/imagecreator/dynImageAPI.php?' +
    'apiKey=7t4QefsxAbNPZKksSGh9AuQ6Yx838P35' +
    '&background=http%3A%2F%2Fec2-54-171-172-95.eu-west-1.compute.amazonaws.com%2Ftransparent-png%2F1200%2F680' +
    '&nullTemplate=y' +
    '&lang=en' +
    '&custImg0_x=-85' +
    '&custImg0_y=-178' +
    '&custImg0_w=1294' +
    '&custImg0_h=863' +
    '&custImg0_url=https%3A%2F%2Fucarecdn.com%2Ffbc08ba5-1947-4286-86d9-f814f53f6aa1%2F' +
    '&custImg0_cropAsCircle=N&custImg1_x=132&custImg1_y=85&custImg1_w=338&custImg1_h=338' +
    '&custImg1_url=https%3A%2F%2Fimage.nametests.com%2Fprofilepicture%2F0.jpg' +
    '&custImg1_cropAsCircle=Y' +
    '&textbox2_x=541' +
    '&textbox2_y=144' +
    '&textbox2_w=456' +
    '&textbox2_h=46' +
    '&textbox2_text=Dein+biblischer+Vers+ist...' +
    '&textbox2_align=L' +
    '&textbox2_font=17' +
    '&textbox2_fontColor=%23FFFFFFff' +
    '&textbox5_x=546' +
    '&textbox5_y=221' +
    '&textbox5_w=549' +
    '&textbox5_h=50' +
    '&textbox5_text=Lorem+ipsum+dolor+sit+amet...' +
    '&textbox5_align=L' +
    '&textbox5_font=17' +
    '&textbox5_fontColor=%23FEFFCDff';

var test_url2 = 'http://dev.dev103.social-net.me:8081' +
    '?background=http%3A%2F%2Fec2-54-171-172-95.eu-west-1.compute.amazonaws.com%2Ftransparent-png%2F1200%2F680' +
    '&textbox5_x=546' +
    '&textbox5_fontColor=%23FEFFCDff';

function blob(ev) {
    var communicating = comms(wrapper(ev.target));

    return {
        read: () => aggregator.decompose(communicating.read()),
        write: (baseUrl, kvList) => communicating
            .write(aggregator.compose(baseUrl, kvList)),
    }
}

function kvListHandler(ev) {
    var THE_INPUT = document.getElementById('test_input')
    var THE_URL = test_url;

    var pieces = [
        THE_URL.split('?')[0],
        aggregator.decompose(THE_URL)
    ];

    var kvList = blob(ev);
    console.log(kvList.read());
    console.log(THE_INPUT.value);
    kvList.write(pieces[0], pieces[1]);
    console.log(kvList.read());
    console.log(THE_INPUT.value);
}

document
    .getElementById('test_input')
    .addEventListener('click', kvListHandler);

