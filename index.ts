import * as readline from 'readline';
function rotetLt(s: string, k: number): string {
const n = s.length;
k = k % n;
let res: string[] = new Array(n);
for (let i = k; i<n; i++) {
res[i - k] = s[i];
}
for (let i = 0; i<k; i++) {
res[n - k + i] = s[i];
}
return res.join('');
}
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Enter string:', (s: string) => {
rl.question('Enter positions:', (kInput: string) => {
const k = parseInt(kInput, 10);
console.log(rotetLt(s, k));
rl.close();
});
});
