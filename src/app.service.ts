import { Injectable } from '@nestjs/common';
import { Category, ConvertedProduct } from './challenge1-type';

@Injectable()
export class AppService {
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
  challenge1(): number {
    const categoryList: Category[] = [
      { id: 1, name: '가구' },
      { id: 2, name: '공구' },
      { id: 3, name: '의류' },
    ];
    [...new Array(10000)].forEach((_, index) => {
      categoryList.push({ id: index + 4, name: `카테고리${index + 4}` });
    });

    const start = Date.now();

    const product = {
      id: 1,
      name: '의자',
      keyword: '가구',
    };

    const matchingCategory = categoryList.find(
      (category) => category.name === product.keyword,
    );

    let convertedProduct: ConvertedProduct | null = null;
    if (matchingCategory) {
      convertedProduct = {
        product: {
          name: product.name,
          category: matchingCategory,
        },
      };
    }
    console.log(convertedProduct);
    const end = Date.now();
    return end - start;
  }

  /**
   * 코딩 테스트 - 2: 단어 치환
   *
   * 목표
   * 옵션 이름에 나타난 특정 단어들을 주어진 단어 치환 목록을 사용하여 변경합니다.
   */
  challenge2(): number {
    const translateWordList = [
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
      optionList.push({ id: index + 7, name: `블랙${index + 7}` });
    });

    const start = Date.now();

    const end = Date.now();
    return end - start;
  }
}
