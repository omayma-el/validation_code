import {my_alpha_number_t, sum, my_size_alpha_t, my_display_alpha_t, my_array_alpha_t, my_is_posi_neg_t, fibo, my_display_alpha_reverse_t, my_length_array_t, my_display_unicode_t, quickSort, tspBrutForce, permuter, resoudreSudoku} from '../src/';


describe('my_alpha_number_t', () => {
  it('Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello”', () => {
    expect(my_alpha_number_t("Hello")).toBe('Hello');
  });
  it('Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour”', () => {
    expect(my_alpha_number_t("Bonjour")).toBe('Bonjour');
  });
  it('Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “”', () => {
    expect(my_alpha_number_t("")).toBe('');
  });
});

describe('sum', () => {
    it('Should return the sum of 2+2; which is 4', () => {
        expect(sum(2, 2)).toBe(4);
    });      
    it('Should return the sum of "2"+"2"; which is 0', () => {
        expect(sum('2', '2')).toBe(0);
    });
});

describe('my_size_alpha_t', () => {
    it('Should return the length of the string "hello world" which is 11', () => {
        expect(my_size_alpha_t('hello world')).toBe(11);
    });  
    it('Should return 0 for non-string inputs', () => {
    expect(my_size_alpha_t(12345)).toBe(0);
    });  
});

describe('my_display_alpha', () => {
    it('Should return "abcdefghijklmnopqrstuvwxyz"', () => {
        expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
    });
    it('Should return a string', () => {
        const result = my_display_alpha_t();
        expect(typeof result).toBe('string');
      });      
});

describe('my_array_alpha', () => {
    it('Should return an array of characters from the input string', () => {
        expect(my_array_alpha_t('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
      });
    it('Should return an empty array for an empty string', () => {
    expect(my_array_alpha_t('')).toEqual([]);
    });
    it('Should return an empty array for a non string argument', () => {
        expect(my_array_alpha_t(15654)).toEqual([]);
    });       
});

describe('my_is_posi_neg_t', () => {
    it('Should return "POSITIF" for 10.5', () => {
        expect(my_is_posi_neg_t(10.5)).toBe('POSITIF');
    });
    it('Should return "NEGATIVE" for zero or -5', () => {
        expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
        expect(my_is_posi_neg_t(-5)).toBe('NEGATIVE');
    });
    it('Should return "Incorrect value" for non-integer value', () => {
        expect(my_is_posi_neg_t("str")).toBe('Incorrect value');
    });         
});

describe('fibo', () => {
    it('Should return the correct Fibonacci number for a given positive input', () => {
        expect(fibo(5)).toBe(5);
        expect(fibo(7)).toBe(13);
    });
    it('Should return 0 for non-positive input', () => {
        expect(fibo(0)).toBe(0);
        expect(fibo(-5)).toBe(0);
    });
    it('Should return "Input must be an integer." for non-integer input', () => {
        expect(fibo('str')).toBe("Input must be an integer.");
    }); 
});

describe('my_display_alpha_reverse_t', () => {
    it('Should return the reversed string of "abcdefghijklmnopqrstuvwxyz', () => {
        expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
    it('Should return a string', () => {
        const result = my_display_alpha_reverse_t();
        expect(typeof result).toBe('string');
    });
});

describe('my_length_array_t', () => {
    it('Should return the correct length for a non-empty array', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = 5;
        expect(my_length_array_t(input)).toBe(expected);
    });
    it('Should return 0 for an empty array', () => {
        expect(my_length_array_t([])).toBe(0);
    });
    it('Should return 0 if the input is not an array', () => {
        expect(my_length_array_t(null)).toBe(0);
        expect(my_length_array_t(undefined)).toBe(0);
        expect(my_length_array_t(123)).toBe(0);
        expect(my_length_array_t('string')).toBe(0);
    });
    it('Should correctly calculate the length of an array containing null or undefined values', () => {
        const input = [1, null, undefined, 4];
        const expected = 4;
        expect(my_length_array_t(input)).toBe(expected);
    });      
});

describe('my_display_unicode_t', () => {
    it('Should correctly convert decimal values to corresponding characters', () => {
        const input = [65, 66, 67, 97, 98, 99, 48, 49, 50, 32];
        const expected = 'ABCabc012 ';
        expect(my_display_unicode_t(input)).toBe(expected);
    });
    it('Should ignore characters outside the specified ranges (e.g., symbols)', () => {
        const input = [33, 64, 42, 36, 37];
        const expected = '';
        expect(my_display_unicode_t(input)).toBe(expected);
    });      
});

describe('quickSort', () => {
    it('Should sort an unsorted array in ascending order', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
        expect(quickSort(input)).toEqual(expected);
    });
    it('Should return the same sorted array if the input is already sorted', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(quickSort(input)).toEqual(expected);
    });
});

describe('permuter', () => {
    it('Should return all permutations of an array', () => {
        const arr = ['A', 'B', 'C'];
        const result = permuter(arr);

        const expected = [
            ['A', 'B', 'C'],
            ['A', 'C', 'B'],
            ['B', 'A', 'C'],
            ['B', 'C', 'A'],
            ['C', 'A', 'B'],
            ['C', 'B', 'A']
        ];

        expect(result).toEqual(expected);
    });
});

describe('tspBrutForce', () => {
    it('Should correctly compute the shortest path and distance for a small set of cities', () => {
        const distances = {
            A: { B: 1, C: 2 },
            B: { A: 1, C: 3 },
            C: { A: 2, B: 3 },
        };
      
        const result = tspBrutForce(distances);
        
        const expected = {
          minDistance: 6,
          meilleurePermutation: ['A', 'B', 'C']
        };
      
        expect(result.minDistance).toBe(expected.minDistance);
        expect(result.meilleurePermutation).toEqual(expected.meilleurePermutation);
    });
    it('Should return zero distance and the city itself when there is only one city', () => {
        const distances = {
            A: { A: 0 }
        };
        
        const result = tspBrutForce(distances);
        const expected = {
            minDistance: 0, 
            meilleurePermutation: ['A']
        };
        
        expect(result.minDistance).toBe(expected.minDistance);
        expect(result.meilleurePermutation).toEqual(expected.meilleurePermutation);
    });
    it('Should return correct result for equal distances', () => {
        const distances = {
          A: { B: 2, C: 2 },
          B: { A: 2, C: 2 },
          C: { A: 2, B: 2 },
        };
    
        const { minDistance, meilleurePermutation } = tspBrutForce(distances);
    
        expect(minDistance).toBe(6);
        expect(meilleurePermutation).toEqual(['A', 'B', 'C']);
      });
    it('Should handle empty input', () => {
        const distances = {};

        const { minDistance, meilleurePermutation } = tspBrutForce(distances);

        expect(minDistance).toBe(Infinity);
        expect(meilleurePermutation).toEqual([]);
    });
});

describe('resoudreSudoku', () => {

    it('Should solve a valid Sudoku puzzle', () => {
      const puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
  
      const expectedSolution = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
      ];

      let bool = resoudreSudoku(puzzle);
  
      expect(bool).toEqual(true);
    });
    it('should return false for an unsolvable Sudoku puzzle', () => {
        const unsolvablePuzzle = [
          [9, 3, 0, 0, 7, 0, 0, 0, 9],
          [6, 0, 0, 1, 9, 5, 0, 0, 0],
          [0, 9, 8, 0, 0, 0, 0, 6, 0],
          [8, 0, 0, 0, 6, 0, 0, 0, 3],
          [4, 0, 0, 8, 0, 3, 0, 0, 1],
          [7, 0, 0, 0, 2, 0, 0, 0, 6],
          [0, 6, 0, 0, 0, 0, 2, 8, 0],
          [0, 0, 0, 4, 1, 9, 0, 0, 5],
          [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
    
        const result = resoudreSudoku(unsolvablePuzzle);

        expect(result).toEqual(false);
      });
});