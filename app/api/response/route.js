export async function POST(req){
    const {text} = await req.json();
    if(text.length == 7 || text == "7" || text == "07" || text.toLowerCase() == "dhoni"){
        
        return Response.json("https://www.youtube.com/watch?v=0yDOloeUtfM", {
          status: 201,
        });
    }
    return Response.json("https://www.youtube.com/watch?v=9n73MBFaqkU", {
      status: 202,
    });
}