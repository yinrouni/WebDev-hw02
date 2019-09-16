# WebDev-hw02

## Part A
In this part, the web is about sea otter. The image is by "Mike" Michael L. Baird, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=3106081 


## Part B

## How to use:
At th begining, when user doesn't pressed any button, nothing to display.
If the user presses any buttons of number, it will start a new number and keeping adding digits to the number until an operator or "C" is pressed.
It doesn't matter that the input number starts with multiple zeros. The extra zeros can be omitted when calculating. If the input number is negative, start with "-". We can simply start a float number by "." and also multiple leading zeros. If you accidentally press "." when inputting a number, only the first one works.
But multiple leading "-" are not accepted, which may lead to NaN.

After finishing inputting the first operand, select your operator. The first operand will disappear, and it's time to input anothe operand. Finally, "=" shows the result.

Since the "+" and "=" are the same button, when there is only one operand input, it will work as "=", othwise "+". In other words, if tending to evaluate "1+2+3+4", you have to press "1 +/= 2 +/= +/= 3 +/= +/= 4". This problem only occurs when there are multiple "+"s. The calculator can support directive operations on the last result we get and chain calculation with only one "+", which will respect the precedence of operators. e.g. to evaluate 1+2*3-4/4-5, press "1 +/= 2 × 3 - 4 ÷ 4 - 5 +/=" to get the correct answer 1.

If oprands or results are too long to display, don't worry, the dispaly zone can resize to show all th digits, but at the same time the buttons will get larger as well.

"C" means clear ranther than undo. Everything will gone when pressed. If there's any typo when inputting, unfortunately, you have to clear it and restart from the begining.

Note: This calculator can't assess the validity before evaluation. Please make sure the expression to be calculated is valid, or it may return some error instead of desirable results.

## How it works:
The calculator actually convert the infix expression users input, to postfix with the help of array(i.e. stack), and show the result from calculating the psotfix.
