# Results

## 1. Apple M1

### 1.1. node 22

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

## 2. Windows

TBD
