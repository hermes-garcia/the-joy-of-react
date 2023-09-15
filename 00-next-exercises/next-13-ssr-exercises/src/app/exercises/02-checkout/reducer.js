import produce, {current} from "immer";

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "add-item": {
        const itemIndex = state.findIndex((item) => item.id === action.item.id);

        if (itemIndex !== -1) {
          draftState[itemIndex].quantity += 1;
          return;
        }

        draftState.push({
          ...action.item,
          quantity: 1,
        });
        return;
      }

      case "delete-item": {
        const itemIndex = state.findIndex((item) => item.id === action.item.id);

        draftState.splice(itemIndex, 1);
        return;
      }

      case "init-items": {
        draftState.splice(0,draftState.length);
        action.items.forEach((item) => {
          draftState.push(item);
        });
        return;
      }
    }
  });
}

export default reducer;
