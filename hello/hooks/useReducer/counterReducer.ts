export default function counterReducer(
  state: { count: number },
  action: { type: "increment" | "decrement" | "reset" }
): { count: number } {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
}
