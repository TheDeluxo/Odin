names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

function chooseName() {
    index = Math.floor(Math.random() * names.length);
    para = names[index];
    return para;
}

blah = chooseName()
console.error(blah)
console.warn(blah)