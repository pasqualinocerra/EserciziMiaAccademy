export const utilities = {
    generateTableTrHTML : (item) => 
        `
        <tr>
            <td>${item.postId}</td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.body}</td>
        </tr>
        ` 
}