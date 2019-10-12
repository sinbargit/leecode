/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        var rowNum = []; 
        var colNum = []; 
        var subNum = []; 
        for(var i=0;i<board.length;i++)
        {   
                for(var j=0; j<board[i].length;j++)
                {   
                        var num = board[i][j];
                        rowNum[i]=rowNum[i]||[];
                        colNum[j]=colNum[j]||[];
                        isNaN(rowNum[i][num])?rowNum[i][num] =  0:'';
                        isNaN(colNum[j][num])?colNum[j][num] =  0:'';
                        isNaN(num)?'':rowNum[i][num]++; 
                        isNaN(num)?'':colNum[j][num]++; 
                        var sub = parseInt(i/3)*3+parseInt(j/3) 
                        subNum[sub]=subNum[sub]||[];
                        isNaN(subNum[sub][num])?subNum[sub][num]=0:'';
                        isNaN(num)?'':subNum[sub][num]++
                        if(subNum[sub][num]>1||rowNum[i][num]>1||colNum[j][num]>1)
                        {   
                                return false;   
                        }    
                }    
        }   
return true;
};
