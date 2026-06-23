import Form from 'next/form'
// this form will search for members in the data.json in the lib folder

export default function MemberSearchForm () {
 
// interface MemberProps {
// name: string,
// membership: boolean,

// }

// function findIndividual (){
    return(
        <div>
        <div>Individual Search</div>
        <Form action="/search">
           <div>
            <div>
            First Name <input className='border solid 2px' name="query" />
            </div>
            <div>Submit
            <button 
            type="submit"
            className='bg-blue'
            />
            </div>
            </div>
        </Form>

        </div>
    )

// }


    

}