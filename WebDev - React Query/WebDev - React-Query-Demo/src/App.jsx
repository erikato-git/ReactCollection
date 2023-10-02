import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: 1, title: "Post 1"},
  { id: 1, title: "Post 2"},
]


function App(){
  const queryClient = useQueryClient()
  
  const postQuery = useQuery({
    queryKey: ["posts"],                                  // identifier
    queryFn: () => Wait(1000).then(() => [...POSTS])      // function
  })

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return Wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title}))
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])  // refetch postQuery immediately after mutation succeeded
    }
  })


  if(postQuery.isLoading) return <h1>Loading ...</h1>
  if(postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>

  return (
    <div>
      {
        postQuery.data.map(post => (
          <div key={post.id}>{post.title}</div>
        ))
      }
      <button
        disabled={newPostMutation.isLoading}  
        onClick={() => newPostMutation.mutate("New Post")}>Add New</button>
    </div>
  )

}




function Wait(duration){
  return new Promise(resolve => setTimeout(resolve,duration))
}


export default App
