import { useToasterContext } from "@/contexts/ToasterContext"

export function useToast() {
  const { dispatch } = useToasterContext()

  const toast = ({ title, description }: { title?: string; description?: string }) => {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      type: 'ADD_TOAST',
      toast: {
        id,
        title,
        description,
        open: true
      }
    })

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_TOAST',
        id
      })
    }, 5000)
  }

  return { toast }
}