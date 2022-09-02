const { connectToDatabase } = require('../../utils/connectMongo');

export default function Gallery({ art }) {

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    // fields check
    //if (!title || !content) return setError('All fields are required');

    // user structure
    let user = {
      name: "test user 1",
      email: "testemail@email.com",
      createdAt: new Date().toISOString(),
    }

    // save the user
    let response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
        // reset the fields
        console.log("success");
        // set the message

    } else {
        // set the error
        console.log("error");
    }
};

  return (
    <div>
      <ul>
        {/* show a random image, change images ever  */}
        {art.map((artpiece) => (
          <li>
            <img className='final-image' src={artpiece.img_link} />
            <img className='signature-image' src={artpiece.signature}></img>
            <h3>{artpiece.content}</h3>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export async function getServerSideProps() {

  //load the gallery of art from the database
    const { db } = await connectToDatabase();
  
    const art = await db 
      .collection("art")
      .find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();
  
    return {
      props: {
        art: JSON.parse(JSON.stringify(art)),
      },
    };
  }
