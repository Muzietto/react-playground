const BREAKPOINT_MOBILE = 600;
const BREAKPOINT_TABLET = 900;
// const BREAKPOINT_DESKTOP = 1200;
// const BREAKPOINT_LARGE = 1600;

const get = width => {

  if (width < BREAKPOINT_MOBILE) {
    return 'mobile';
  }

  if (width < BREAKPOINT_TABLET) {
    return 'tablet';
  }

  return 'desktop';
};

export default {
  get,
};
