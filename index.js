let bool = true;
console.log(bool);
bool = false;
console.log(bool);  
bool = true && false; // AND
bool = false && true; // AND
bool = false && false; // AND
bool = true && true; // AND
console.log(bool);
bool = true || false; // OR
bool = false || true; // OR
bool = false || false; // OR
bool = true || true; // OR
console.log(bool);
bool = !true; // NOT
console.log(bool);
bool = !false; // NOT
console.log(bool);

bool = (true && false || true) && (!false || (false && true));
console.log(bool);

bool = 10 > 5;
bool = 10 < 5;
bool = 10 > 10;
bool = 10 < 10;
bool = 10 == 10;
bool = '10' == 10; // Non strict will covert and check
bool = '10' === 10; // Strict will check type and value
bool = 10 >= 10;
bool = 10 <= 10;
bool = '10' != 10;
bool = '10' !== 10;
bool = [] == '';
bool = [1,2, 3] == 1;
console.log(bool);
