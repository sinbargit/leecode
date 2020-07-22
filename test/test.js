function arrayToJson(arr) {
    const root = {};
    window.node = root;
    deep(root, 0, arr);
    console.log(JSON.stringify(root));
}

function deep(node, i, arr) {
    console.log(i)
    if (arr[i]) {
        node.id = arr[i];
        node.children = [];
        node.left = deep({}, i * 2 + 1, arr);
        node.right = deep({}, i * 2 + 2, arr);
        node.left && node.children.push(node.left);
        node.right && node.children.push(node.right);

        return node;
    }
    else {
        return null;
    }
}

// module.exports.arrayToJson = arrayToJson;
arrayToJson([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]);
