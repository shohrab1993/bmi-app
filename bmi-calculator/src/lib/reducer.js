export const reducer = (state, action) => {
  switch (action.type) {
    //BMI
    case "CHANGE_WEIGHT":
      return { ...state, weight: action.value };
    case "CHANGE_HEIGHT":
      return { ...state, height: action.value };
    case "CHANGE_RESULT":
      return { ...state, result: action.value };

    //Male BMR
    case "BMR_WEIGHT":
      return { ...state, bmrWeight: action.value };
    case "BMR_HEIGHT":
      return { ...state, bmrHeight: action.value };
    case "BMR_AGE":
      return { ...state, bmrAge: action.value };
    case "BMR_RESULT":
      return { ...state, bmrResult: action.value };

    //Female BMR
    case "F_BMR_WEIGHT":
      return { ...state, fBmrWeight: action.value };
    case "F_BMR_HEIGHT":
      return { ...state, fBmrHeight: action.value };
    case "F_BMR_AGE":
      return { ...state, fBmrAge: action.value };
    case "F_BMR_RESULT":
      return { ...state, fBmrResult: action.value };
    //Refresh
    case "REFRESH":
      return { ...state, weight: "", height: "", result: "" };

    default:
      return state;
  }
};
