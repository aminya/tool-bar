import Iconify from '@iconify/iconify';

export function createIconElement(icon) {
  const span = document.createElement("span")
  span.classList.add("iconify")
  span.setAttribute("data-icon", icon)
  return span
}

// the icon property will be passed into createIconElement automatically
export const testIcons = [
  {icon:"ic:baseline-access-time", color: "yellow"},
  {icon:"fa-save", color: "red"},
]
