import displayComment from "./displayComments.js"

const addComment = async (id) => {
    console.log(id)
    console.log("be carefull");
    const name = document.querySelector('.userName').value;
    const userComent = document.querySelector('.userComent').value;
    console.log(name)
    console.log(userComent);
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/comments?item_id=${id}`, {
        method: 'POST',
        body: JSON.stringify({
            item_id: id,
            username: name,
            comment: userComent,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        document.querySelector('#form-comment').reset();
    });
    displayComment(id);
}

export default addComment;