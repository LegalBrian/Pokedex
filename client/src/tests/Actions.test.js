import {
  filterPokemonsByType,
  filterCreated,
  orderByName,
  orderByAttack,
  orderById
} from "../redux/actions/index";

describe("Reducer-Actions Tests:", () => {
  it("It should return an action with props type FILTER_BY_TYPE & payload, the value is send as an argument:", () => {
    expect(filterPokemonsByType("flying")).toEqual({
      type: "FILTER_BY_TYPE",
      payload: "flying",
    });
  });

  it('It should return an action with the props type "FILTER_CREATED" & payload, the value is send as an argument:', () => {
    expect(filterCreated("created")).toEqual({
      type: "FILTER_CREATED",
      payload: "created",
    });
  });

  it('It should return an action with the props type "ORDER_BY_NAME" & payload, the value is send as an argument:', () => {
    expect(orderByName("ascendant")).toEqual({
      type: "ORDER_BY_NAME",
      payload: "ascendant",
    });
  });

  it('It should return an action with the props type "ORDER_BY_ATTACK" & payload, the value is send as an argument:', () => {
    expect(orderByAttack("ascendant")).toEqual({
      type: "ORDER_BY_ATTACK",
      payload: "ascendant",
    });
  });

  it('It should return an action with the props type "ORDER_BY_ID" & payload, the value is send as an argument:', () => {
    expect(orderById("ascendant")).toEqual({
      type: "ORDER_BY_ID",
      payload: "ascendant",
    });
  });
});