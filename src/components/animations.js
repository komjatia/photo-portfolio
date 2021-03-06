export const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const AnimationContainer = {
  hidden: {
    x: 100,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.5,
      when: "afterChildren",
    },
  },
};

export const FullPageAnimations = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};
