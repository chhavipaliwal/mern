const counterReducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 10 }; // Reset to initial value

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default counterReducer;
