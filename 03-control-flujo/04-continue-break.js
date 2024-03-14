let i = 0;
while (i < 6) {
    i++;
    if (i === 1) {
        continue;
    }
    if (i === 6) {
        break;
    }
    console.log(i);
}