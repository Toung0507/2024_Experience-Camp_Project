/* ● 4/25任務-JS 任務 Day1 - 字串、數字相加 */

//題目一：hello world！
function hello() {
    return "Hello World！"
}

//題目二：參數+字串練習
function sayHi(name) {
    return `${name}，Hello world！`
}

//題目三：參數加法產生器
function add(num) {
    return num + num
}

//題目四：兩個參數相加器
function addTwo(num1, num2) {
    return num1 + num2;
}

//題目五：參數+字串相加
function AddString(num1, num2, num3) {
    return `第一加第二個參數加總為 ${num1 + num2}，第三個參數為 ${num3}`;
}

/* ● 4/26任務-JS 任務 Day2 - 數字處理 */

//題目一：平方計算
function square(num) {
    //return num*num;  平方是自己乘自己
    return num ** 2;   //次方寫法**，二次方
}

//題目二：數學邏輯題
function calculate(num1, num2, num3) {
    return num1 + num2 - num3;
}

//題目三：四捨五入題
function rounding(num) {
    return num.toFixed(2);
    // return Number(num.toFixed(2));
}

//題目四：字串轉數字
function parseNumber(inputext) {
    return Number(inputext);
}

//題目五：被二整除
function divisible(num) {
    return num % 2;
}

/* ● 4/29任務-JS 任務 Day3 - 字串設計 */

// 題目一：字串長度計算
function checkStringLength(StringText) {
    return StringText.length;  //不需要()
}

// 題目二：英文強制小寫
function lowerCase(StringText) {
    return StringText.toLowerCase(); //大寫則toUpperCase()
}

// 題目三：去除掉段落的左右空白
function trimString(StringText) {
    return StringText.trim();
}

// 題目四：字串依照條件轉陣列
function splitString(splitString) {
    return splitString.split(","); // ,是分割符
}

// 題目五：切割市區字串
function getArea(address) {
    let city = address.search("市"); //搜尋市是第幾個索引值
    let area = address.search("區"); //搜尋區是第幾個索引值
    return address.slice(city + 1, area + 1); //索引值各加一才會在市的後面一個字開始，在區結尾
}

/* ● 4/30-JS 任務 Day4 - 比較與邏輯運算子 */

//題目一：比大小
function higher(num1, num2) {
    if (num1 > num2) {
        return true;
    }
    else {
        return false;
    }
}

//題目二：布林反轉
function booleanToggle(booleanText) {
    return !booleanText;
}

//題目三：型別判斷
function checkType(type) {
    return typeof (type);
}

//題目四：打八折後，是否總價大於 100 元
function onsale(price) {
    return price * 0.8 > 100 ? true : false;
}

// 題目五：是否大於 200，且符合會員條件
function checkVIP(price, member) {
    if (price > 200) {
        if (member) {
            return true;
        }
        return false;
    }
    else {
        return false;
    }
}

/* ● 5/1-JS 任務 Day5 - if 流程判斷 I */
//題目一：成年計算機
function checkAdult(year) {
    if (year <= 18)
        return "未成年";
    else
        return "成年";
}

//題目二：法定性行為年紀計算機(16歲)
function canSex(year, sex) {
    if (year <= 16)
        return "你還不行哦~";
    else
        return "可以色色";
}

//題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
function buy(price) {
    if (price < 0) {
        return "再鬧我就生氣了哦~";
    }
    else if (price == 0) {
        return "...你來亂的嗎";
    }
    else if (price < 300) {
        return `不優惠券資格，費用是 ${price}`;
    }
    else if (price == 300) {
        return `剛好符合資格，費用是 250`;
    }
    else if (price > 300) {
        price = price - 50;
        return `符合優惠券資格，費用是 ${price}`;
    }
}

//進階題目：是否為質數(100內)
function isPrime(num) {
    if (num < 0) {
        return "無法判別";
    }
    else if (num > 100) {
        return "我只能算 100 以內的質數計算，原諒我QQ";
    }
    else {
        let i = 2;
        while (i <= Math.sqrt(num)) {
            if (num % i == 0) {
                return "不是質數";
            }
            else {
                i++;
            }
        }
        if (i > Math.sqrt(num)) {
            return "是質數";
        }
        // let count = 0;
        // for (let i = 1; i <= num; i++) {
        //     if (num % i == 0) {
        //         count++;
        //     }
        // }
        // if (count == 2) {
        //     return "是質數";
        // }
        // else {
        //     return "不是質數";
        // }

    }
}

/* ● 5/2-JS 任務 Day6 - if 流程判斷 II */

// 題目一：日幣計算機 (1:0.32)
function TWDtoJPY(price) {
    if (typeof price == "string") {
        return "當我看不懂字串？？";
    }
    else if (price < 0) {
        return "...沒錢別來亂";
    }
    else if (price > 0) {
        price = price / 0.32;
        return `你換到的日幣有：${price}`;
    }
}

// 題目二：匯率計算機
// 美金：1:29
// 港幣：1:3
// 英鎊：1:35
function TWDtoAnother(price, nation) {
    if (nation == "USD") {
        return (price = price * 29);
    }
    else if (nation == "HKD") {

        return (price = price * 3);
    }
    else if (nation == "GBP") {
        return (price = price * 35);
    }
    else {
        return "...";
    }
}

//題目三：BMI 計算機
function BMI(height, weight) {
    height = height / 100;
    height = height ** 2;
    let BMI = weight / height;
    if (BMI < 18.5) {
        return "過輕";
    }
    else if (BMI >= 18.5 && BMI < 24) {
        return "正常";
    }
    else if (BMI >= 24 && BMI < 27) {
        return "過重";
    }
    else if (BMI >= 27 && BMI < 30) {
        return "輕度肥胖";
    }
    else if (BMI >= 30 && BMI < 35) {
        return "中度肥胖";
    }
    else if (BMI >= 35) {
        return "重度肥胖";
    }
}

// 進階題，不適合新手
// 字串切割+if
// 如果第一個數字是質數，請將第二、三個數字加總
// 如果第一個數字是偶數，請將第二、三個數字相減
// 如果第一個數字不是質數也不是偶數，請將第二、三個數字相乘

function sum(numText) {
    const numarray = numText.split(",").map(num => Number(num));
    if (numarray[0] % 2 == 0) {
        return numarray[1] - numarray[2];
    }
    else if (isPrime(numarray[0])) {
        return numarray[1] + numarray[2];
    }
    else {
        return numarray[1] * numarray[2];
    }
}

/* ● 5/3-JS 任務 Day7 - if 流程判斷 III */
// 題目一：有沒有打折
// 某廠商大甩賣，折扣表如下：

// 未滿 2000 無折扣
// 2000~2999 9折
// 3000~3999 8折
// 高於 4000 7折

function sale(num) {
    if (num < 2000) {
        return num;
    }
    else if (num >= 2000 && num <= 2999) {
        return num * 0.9;
    }
    else if (num >= 3000 && num <= 3999) {
        return num * 0.8;
    }
    else if (num >= 4000) {
        return num * 0.7;
    }
}

// 題目二：西元轉民國
// 台灣/建立時間：1912 年 1 月 1 日
// 應該是1911年才對

function CEtoChinese(year) {
    if (year < 1911) {
        return "尚未建國";
    }
    else {
        year = year - 1911;
        return `民國${year}年`;
    }
}


// 題目三：年薪計算機
// 以下是梅添良軟體公司的計薪方式

// 每個月固定支薪，不幫員工保勞健保
// 三節沒禮金，也沒任何獎金
// 只有月薪、年終
// 年終計算
// 未滿一年，不會有年終
// 待超過一年的員工，年終會有 1 個月
// 待超過五年的員工，年終會有 1.3 個月

function annualSalary(monthly_salary, seniority) {
    if (seniority < 1) {
        return monthly_salary * 12;
    }
    else if (seniority > 1 && seniority < 5) {
        return monthly_salary * 12 + monthly_salary;
    }
    else if (seniority > 5) {
        return monthly_salary * 12 + monthly_salary * 1.3;
    }
}


// 魔王題，請不要輕易接觸，會花上 8hr 時間
// 梅添良薪水數字大小寫轉換
// 老闆開發票時，很不擅長數字小寫轉大寫，請幫助他這個金魚腦
// // input 輸入
// changeCapital(35000)
// changeCapital(9876543210)
// changeCapital(-33)
// changeCapital("安安")
// changeCapital("033")
// // output 輸出
// "參萬伍仟元整"
// "玖拾捌億柒仟陸佰伍拾肆萬參仟貳佰壹拾元整"
// "格式錯誤"
// "格式錯誤"
// "參拾參元整"

function changeCapital(Text) {
    num = Number(Text);
    if (isNaN(num) || num < 0) {
        return "格式錯誤";
    }
    else {
        let len = num.toString().length;
        const numarray = Array(len);
        const numaarray = Array(len);
        numarray[0] = num % 10;
        numaarray[0] = parseInt(num / 10); 
        num = parseInt(num / 10);
        for (i = 1; i < len; i++) {
            numarray[i] = parseInt(num % 10);
            numaarray[i] = parseInt(num / 10);
            num = parseInt(num / 10);
            console.log(num);
            console.log(`%=${parseInt(num % 10)}`);
        }
        return numarray;
    }
}
