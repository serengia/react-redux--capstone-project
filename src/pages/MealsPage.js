import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeal, getMeals } from "../redux/mealsSlice";

function MealsPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {meals.map((m) => (
          <li key={m.idMeal}>
            <button
              type="button"
              data-id={m.idMeal}
              onClick={(e) => {
                dispatch(getMeal(e.target.dataset.id));
              }}
            >
              {m.strMeal}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealsPage;
