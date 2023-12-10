//----------------------SYNTAX 1--------------
// import { type PropsWithChildren } from 'react'
import { ReactNode } from 'react'

// type CourseGoalProps = PropsWithChildren<{ title: string }>

type CourseGoalProps = {
  title: string
  children: ReactNode
}

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  )
}

//---------------Another SYNTAX----------------
// import { ReactNode, type FC } from 'react'

// interface CourseGoalProps {
//   title: string
//   children: ReactNode
// }

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// export default CourseGoal
