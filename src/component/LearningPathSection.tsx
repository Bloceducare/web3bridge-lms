import type React from "react"
import LearningPath from "@/component/ui/LearningPath"
import { BeginnerBlockchainIcon, IntermediateBlockchainIcon, AdvancedBlockchainIcon } from "@/assests/icon"

const LearningPathsSection: React.FC = () => {
  return (
    <div className="mb-12 text-primary-black">
      <h2 className="text-3xl font-bold text-center mb-2">Start Learning For Freeeee!</h2>
      <p className="text-xl text-center mb-6 leading-8">
        Learning with the WebBridge LMS is free right now.
        <br /> Learn as much as you can, before we change our minds!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LearningPath
          title="Beginner"
          icon={BeginnerBlockchainIcon}
          description="This is the true start of the journey to becoming a smart contract developer!"
          duration="95 hours, 30 minutes"
          lessons={101}
          task={3}
        />

        <LearningPath
          title="Intermediate"
          icon={IntermediateBlockchainIcon}
          description="Learn advanced CSS and JavaScript, become a senior developer"
          duration="20 hours"
          lessons={52}
          task={7}
        />

        <LearningPath
          title="Advanced"
          icon={AdvancedBlockchainIcon}
          description="This is the final start of the journey to becoming a smart contract developer"
          duration="32 hours"
          lessons={65}
          task={9}
        />
      </div>
    </div>
  )
}

export default LearningPathsSection

