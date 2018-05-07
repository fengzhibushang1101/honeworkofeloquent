const mountains = require("./chapter6_data");


function rowHeights(rows) {
    return rows.map(row => row.reduce((max, cell) => Math.max(max, cell.minHeight()), 0));
}

function rowWidth(rows) {
    return rows[0].map((_, i) => rows.reduce((max, row) => Math.max(max, row[i].minWidth()), 0));
}


function TextCell(text) {
    this.text = text.split("\n")
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce((w, line) => Math.max(max, line.length), 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        result.push((this.text[i] || "").padEnd(width));
    }
    return result;
};

function drawTable(rows) {
    let heights = rowHeights(rows);
    let width = rowHeights(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(block => block[lineNo]).join(" ");
    }

    function drawRow(row, rowNum) {
        let blocks = row.map((cell, colNum) => cell.draw(width[colNum], heights[rowNum]));
        return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

let rows2 = [];
for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
        if ((j + i) % 2 === 0) {
            row.push(new TextCell("##"));
        } else {
            row.push(new TextCell("  "));
        }
    }
    rows2.push(row);
}
console.log(drawTable(rows2));


let new_mounts = mountains.map(mount => [new TextCell(mount.name), new TextCell(String(mount.height)), new TextCell(mount.country)]);
console.log(drawTable(new_mounts));