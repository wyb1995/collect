
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
    var arr1 = collection_a;
    var arr2 = object_b.value;
    var arr3=[];
    for(var s in arr1){
        for(var x in arr2){
            if(arr1[s].key==arr2[x]){
                arr3.push(arr1[s].key);
            }
        }
    }
    return arr3;
}

module.exports = collect_same_elements;
