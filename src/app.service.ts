import { Injectable } from '@nestjs/common';
import { Category, ConvertedProduct } from './challenge1-type';
import { UtilsService } from './utils/utils.service';
import { Option, TranslateWord } from './challenge2-type';

@Injectable()
export class AppService {
  private categoryDict: { [key: string]: Category };
  constructor(private readonly utilsService: UtilsService) {
    this.categoryDict = {};
    const categoryList: Category[] = [
      { id: 1, name: '가구' },
      { id: 2, name: '공구' },
      { id: 3, name: '의류' },
    ];
    categoryList.forEach((category) => {
      this.categoryDict[category.name] = category;
    });
    [...new Array(10000)].forEach((_, index) => {
      const category = { id: index + 4, name: `카테고리${index + 4}` };
      categoryList.push(category);
      this.categoryDict[category.name] = category;
    });
  }
  proxy() {
    //API 호출
    return true;
  }

  /**
   * 코딩 테스트 - 1: 상품 카테고리 매칭
   *
   * 목표
   * 상품을 수집할 때 제공된 키워드를 기반으로 카테고리 목록과 매칭하여 상품에 카테고리 정보를 연결하는 프로세스를 구현합니다.
   */

  async challenge1(): Promise<ConvertedProduct> {
    const start = Date.now();

    const product = {
      id: 1,
      name: '의자',
      keyword: '가구',
    };
    const convertedProduct = await this.utilsService.convertProduct(
      product,
      this.categoryDict,
    );
    if (!convertedProduct) {
      throw new Error('상품이 없습니다.');
    }

    const end = Date.now();
    console.log(end - start);
    return convertedProduct;
  }

  /**
   * 코딩 테스트 - 2: 단어 치환
   *
   * 목표
   * 옵션 이름에 나타난 특정 단어들을 주어진 단어 치환 목록을 사용하여 변경합니다.
   */
  async challenge2(): Promise<Option[]> {
    const translateWordList: TranslateWord[] = [
      { src: '블랙', dest: '검정색' },
      { src: '레드', dest: '빨간색' },
    ];
    [...new Array(10000)].forEach((_, index) => {
      translateWordList.push({ src: index.toString(), dest: `A` });
    });
    const optionList = [
      { id: 1, name: '블랙 XL' },
      { id: 2, name: '블랙 L' },
      { id: 3, name: '블랙 M' },
      { id: 4, name: '레드 XL' },
      { id: 5, name: '레드 L' },
      { id: 6, name: '레드 M' },
    ];
    [...new Array(50)].forEach((_, index) => {
      optionList.push({ id: index + 7, name: `블랙 ${index + 7}` });
    });
    const start = Date.now();

    const result = await Promise.all(
      optionList.map(async (option) => {
        const name = await this.utilsService.translateOptionName(
          option.name,
          translateWordList,
        );
        return { ...option, name };
      }),
    );
    if (!result) {
      throw new Error('옵션이 없습니다.');
    }
    const end = Date.now();
    console.log(end - start);
    return result;
  }
}
