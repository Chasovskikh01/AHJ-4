export default function isValidCard(value) {
  return value.length >= 15 && value.length <= 16;
}
