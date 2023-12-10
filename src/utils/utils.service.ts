import { Injectable } from '@nestjs/common';
import { Category, ConvertedProduct } from 'src/challenge1-type';

@Injectable()
export class UtilsService {
  async convertProduct(
    product: {
      id: number;
      name: string;
      keyword: string;
    },
    categoryDict: {
      [key: string]: Category;
    },
  ): Promise<ConvertedProduct | null> {
    const matchingCategory = categoryDict[product.keyword];
    let convertedProduct = null;
    if (matchingCategory) {
      convertedProduct = {
        product: {
          name: product.name,
          category: matchingCategory,
        },
      };
    }
    return convertedProduct;
  }
  async translateOptionName(optionName: string): Promise<string> {
    let translatedOptionName = optionName
      .replace('블랙', '검정색')
      .replace('레드', '빨간색');
    translatedOptionName = translatedOptionName.replace(/\d+/g, 'A');
    return translatedOptionName;
  }
}
