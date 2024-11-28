# Results

## 1. Apple M1

### 1.1. node 22.8.0

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 5,858,019 | 2,890,592 | Generators are 2x faster |
| 10 | 1,085,502 | 1,336,292 | Iterators are 1.2x faster |
| 100 | 118,482 | 205,882 | Iterators are 1.7x faster |
| 1,000 | 12,307 | 21,506 | Iterators are 1.7x faster |
| 10,000 | 1,235 | 2,151 | Iterators are 1.7x faster |
| 100,000 | 110 | 209 | Iterators are 1.9x faster |

### 1.2. Chrome 131

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 6,222,085 | 3,821,047 | Generators are 1.6x faster |
| 10 | 981,115 | 1,427,236 | Iterators are 1.5x faster |
| 100 | 106,121 | 200,367 | Iterators are 1.9x faster |
| 1,000 | 10,609 | 20,924 | Iterators are 2x faster |
| 10,000 | 1,073 | 2,158 | Iterators are 2x faster |
| 100,000 | 106 | 212 | Iterators are 2x faster |

### 1.3. Firefox 133

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 2,592,155 | 5,470,090 | Iterators are 2.1x faster |
| 10 | 506,797 | 1,520,592 | Iterators are 3x faster |
| 100 | 57,799 | 194,972 | Iterators are 3.4x faster |
| 1,000 | 5,770 | 19,982 | Iterators are 3.5x faster |
| 10,000 | 591 | 1,984 | Iterators are 3.4x faster |
| 100,000 | 59 | 197 | Iterators are 3.3x faster |

### 1.4. Safari 17

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 2,032,846 | 2,872,039 | Iterators are 1.4x faster |
| 10 | 428,653 | 559,161 | Iterators are 1.3x faster |
| 100 | 46,682 | 65,180 | Iterators are 1.4x faster |
| 1,000 | 4,584 | 6,457 | Iterators are 1.4x faster |
| 10,000 | 461 | 600 | Iterators are 1.3x faster |
| 100,000 | 45 | 57 | Iterators are 1.3x faster |

## 2. Intel Core i9 Windows 11

### 2.1. node 22.8.0

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 5,568,332 | 2,219,605 | Generators are 2.5x faster |
| 10 | 1,133,924 | 1,283,694 | Iterators are 1.1x faster |
| 100 | 132,990 | 228,720 | Iterators are 1.7x faster |
| 1,000 | 14,248 | 24,476 | Iterators are 1.7x faster |
| 10,000 | 1,468 | 2,492 | Iterators are 1.7x faster |
| 100,000 | 124 | 240 | Iterators are 1.9x faster |

### 2.2. Chrome 131

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 7,195,565 | 3,636,782 | Generators are 2x faster |
| 10 | 1,317,849 | 1,500,316 | Iterators are 1.1x faster |
| 100 | 146,002 | 234,027 | Iterators are 1.6x faster |
| 1,000 | 14,607 | 25,173 | Iterators are 1.7x faster |
| 10,000 | 1,478 | 2,728 | Iterators are 1.8x faster |
| 100,000 | 142 | 258 | Iterators are 1.8x faster |

### 2.3. Edge 131

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 7,816,235 | 3,891,691 | Generators are 2x faster |
| 10 | 1,394,403 | 1,734,376 | Iterators are 1.2x faster |
| 100 | 156,919 | 270,535 | Iterators are 1.7x faster |
| 1,000 | 16,084 | 29,442 | Iterators are 1.8x faster |
| 10,000 | 1,664 | 3,020 | Iterators are 1.8x faster |
| 100,000 | 159 | 290 | Iterators are 1.8x faster |

### 2.4. Firefox 133

| n | Generators | Iterators | Winner |
|---| -----------| ----------|--------|
| 1 | 2,500,673 | 4,886,848 | Iterators are 2x faster |
| 10 | 509,511 | 1,494,426 | Iterators are 2.9x faster |
| 100 | 59,027 | 189,910 | Iterators are 3.2x faster |
| 1,000 | 6,050 | 21,231 | Iterators are 3.5x faster |
| 10,000 | 604 | 2,203 | Iterators are 3.6x faster |
| 100,000 | 61 | 218 | Iterators are 3.6x faster |
