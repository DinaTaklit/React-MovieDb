// This is the reducer that control the carousel next and previous buttons
const reducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.slideLength
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? state.slideLength - 1 : state.slideIndex - 1
      };
    }
};
export default reducer