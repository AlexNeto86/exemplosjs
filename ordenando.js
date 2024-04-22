
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// b) Função shuffle
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
};

// c) Função bubble_sort
const bubble_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

// d) Função selection_sort
const selection_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

// e) Função quick_sort
const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quick_sort(array, low, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, high);
    }
    return array;
};

// f) Função particionamento
const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

// Exemplo de uso:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array não ordenado:", array);

// Ordenando o array usando os algoritmos definidos
bubble_sort(array.slice());
console.log("Array ordenado com Bubble Sort:", array);

selection_sort(array.slice());
console.log("Array ordenado com Selection Sort:", array);

quick_sort(array.slice());
console.log("Array ordenado com Quick Sort:", array);
