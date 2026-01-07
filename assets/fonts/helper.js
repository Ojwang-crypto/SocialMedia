export const getFontFamily = (baseFont, weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
      case '200':
      return `${baseFont}-ExtraLight`;
      case '300':
      return `${baseFont}-light`;
      case 'normal':
      case '400':
      return `${baseFont}-Regular`;
      case '500':
      return `${baseFont}-Medium`;
      case '600':
      return `${baseFont}-SemiBold`;
      case 'bold':
      case '700':
      return `${baseFont}-Extrabold`;
      case '800':
      return `${baseFont}-Black`;
      default:
      return `${baseFont}-Regular`;

  }
};
