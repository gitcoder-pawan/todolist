import React from 'react'

function Lists({ itemlist,setItemList }) {
    const deleteItem=key=>{
            const newlist=itemlist.filter(element=>{
                return(
                    element.key!=key
                );
            })
        setItemList(newlist);
    }
    return (
        <div>
            {itemlist.map(element=>{
            return(
                <div className="lists">
                    <div style={{width:'70%'},{textAlign:'left'}}><p>{element.val}</p></div>
                    <div style={{width:'10%'},{textAlign:'right'}}><button onClick={()=>{deleteItem(element.key)}}>X</button></div>
                </div>
            );
        })}
        </div>
    );
}

export default Lists;
