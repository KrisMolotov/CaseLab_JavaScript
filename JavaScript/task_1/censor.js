function censor ()
{
    let pairs = new Map()
    return function (string1, string2 = undefined)
    {
        if(string2 !== undefined)
        {
            pairs.set(string1, string2)
        }
        else{
            for(let pair of pairs)
            {
                let key = pair[0]
                let value = pair[1]
                string1.replace(key, value, global)
            }
            return string1
        }
    }
}

const changeScene = censor();
changeScene('PHP','JS');
changeScene('backend', 'frontend')
console.log(changeScene('PHP is the most popular programming language for backend web-development'));