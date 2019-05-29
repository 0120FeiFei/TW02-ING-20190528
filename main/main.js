module.exports = function main() {
   var arr0 = new Array("._.","|.|","|_|");
   var arr1 = new Array("...","..|","..|");
   var arr2 = new Array("._.","._|","|_.");
   var arr3 = new Array("._.","._|","._|");
   var arr4 = new Array("...","|_|","..|");
   var arr5 = new Array("._.","|_.","._|");
   var arr6 = new Array("._.","|_.","|_|");
   var arr7 = new Array("._.","..|","..|");
   var arr8 = new Array("._.","|_|","|_|");
   var arr9 = new Array("._.","|_|","..|");
   var result = new Array();
  //将输入参数变成数组
  var inputNum = parseInt(arguments[0]);
  var input  = inputNum.toString();
  var inputArr = input.split("");
   for(i = 0; i < 3 ; i++){//求的每个数字的第i行的图形
	   var resTemp = new Array();
	   for(j = 0 ; j < inputArr.length ; j++){
		   var n = parseInt(inputArr[j]);
		   switch(n){
			   case 0: 
			         resTemp.push(arr0[i]);
			         break;
			   case 1:
			         resTemp.push(arr1[i]);
			         break;
			   case 2:
			         resTemp.push(arr2[i]);
			         break;
			   case 3:
			         resTemp.push(arr3[i]);
			         break;
			   case 4:
			         resTemp.push(arr4[i]);
			         break;
			   case 5:
			         resTemp.push(arr5[i]);
			         break;
			   case 6:
			         resTemp.push(arr6[i]);
			         break;
			   case 7:
			         resTemp.push(arr7[i]);
			         break;
			   case 8:
			         resTemp.push(arr8[i]);
			         break;
			   case 9:
			         resTemp.push(arr9[i]);
			         break;
			   default:
			         console.log("Error");
		   }
		   
	   }
	   var strTemp = resTemp.join(" ")+"\n";
	   result.push(strTemp);  //将第i行图形转化成一个字符串，保存进结果集 
	  
   }
    console.log(result.join(""));
   return result.join("");
};