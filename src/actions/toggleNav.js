export const TOGGLE_NAV = "TOGGLE_NAV";

export function toggleNav(bool){
  return {
    type: TOGGLE_NAV,
    bool
  }
}