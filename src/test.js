function loadMore(pageIndex, selectedCategory) {
    console.log(pageIndex);
    console.log(selectedCategory);
}

const state = {
    pageIndex:1,
    selectedCategory: 'show'
}

loadMore(state.pageIndex,state.selectedCategory)