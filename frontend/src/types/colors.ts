type ColorValues =
  | "gray-800" | "gray-700" | "gray-600" | "gray-500" | "gray-400" | "gray-300" | "gray-200" | "gray-100"
  | "danger" | "success"
  | "blue-dark" | "blue-base" | "blue-light"
  | "purple-dark" | "purple-base" | "purple-light"
  | "pink-dark" | "pink-base" | "pink-light"
  | "red-dark" | "red-base" | "red-light"
  | "orange-dark" | "orange-base" | "orange-light"
  | "yellow-dark" | "yellow-base" | "yellow-light"
  | "green-dark" | "green-base" | "green-light"
  | "brand-base" | "brand-dark";

const colorMap: Record<ColorValues, string> = {
  "gray-800": "text-gray-800",
  "gray-700": "text-gray-700",
  "gray-600": "text-gray-600",
  "gray-500": "text-gray-500",
  "gray-400": "text-gray-400",
  "gray-300": "text-gray-300",
  "gray-200": "text-gray-200",
  "gray-100": "text-gray-100",
  "danger": "text-danger",
  "success": "text-success",
  "blue-dark": "text-blue-dark",
  "blue-base": "text-blue-base",
  "blue-light": "text-blue-light",
  "purple-dark": "text-purple-dark",
  "purple-base": "text-purple-base",
  "purple-light": "text-purple-light",
  "pink-dark": "text-pink-dark",
  "pink-base": "text-pink-base",
  "pink-light": "text-pink-light",
  "red-dark": "text-red-dark",
  "red-base": "text-red-base",
  "red-light": "text-red-light",
  "orange-dark": "text-orange-dark",
  "orange-base": "text-orange-base",
  "orange-light": "text-orange-light",
  "yellow-dark": "text-yellow-dark",
  "yellow-base": "text-yellow-base",
  "yellow-light": "text-yellow-light",
  "green-dark": "text-green-dark",
  "green-base": "text-green-base",
  "green-light": "text-green-light",
  "brand-base": "text-brand-base",
  "brand-dark": "text-brand-dark",
};

export { colorMap };
export type { ColorValues };
