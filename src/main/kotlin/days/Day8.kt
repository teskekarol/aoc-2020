package days

class Day8 : Day(8) {
    override fun partOne(): String = Computer(inputAsListOfString.asInstructions())
        .run()
        .accumulator
        .toString()

    override fun partTwo(): String {
        val instructions = inputAsListOfString.asInstructions()
        return instructions.indices
            .mapNotNull { Computer(instructions.mutatedAt(it)).run().takeIf { runResult -> runResult.isSuccess } }
            .first()
            .accumulator.toString()
    }
}

private fun List<String>.asInstructions(): List<Instruction> = map {
    val splitted = it.split(" ")
    val instruction = splitted[0].toUpperCase()
    val value = splitted[1].trim().toInt()
    Instruction(InstructionName.valueOf(instruction), value)
}

private fun List<Instruction>.mutatedAt(toChangeIndex: Int): List<Instruction> {
    val filtered = toMutableList()
    filtered[toChangeIndex] = filtered[toChangeIndex].invert()
    return filtered
}

class Computer(private val instructions: List<Instruction>) {
    fun run(): RunResult {
        var currentIndex = 0
        var globalAccumulator = 0
        val visitedIndices = mutableSetOf<Int>()
        while (true) {
            val instruction = instructions.getOrNull(currentIndex) ?: return RunResult(globalAccumulator, false)

            val handleInstructionResult = handleInstruction(instruction, currentIndex)

            globalAccumulator += handleInstructionResult.accumulatorDiff
            val nextIndex = handleInstructionResult.newIndex

            if (handledLastInstruction(currentIndex)) {
                return RunResult(globalAccumulator, true)
            }
            if (alreadyVisitedNextIndex(visitedIndices, nextIndex, currentIndex)) {
                return RunResult(globalAccumulator, false)
            }

            visitedIndices.add(nextIndex)
            currentIndex = nextIndex
        }
    }

    private fun alreadyVisitedNextIndex(visitedIndices: MutableSet<Int>, nextIndex: Int, currentIndex: Int) =
        visitedIndices.contains(nextIndex) || currentIndex == nextIndex

    private fun handledLastInstruction(currentIndex: Int) = currentIndex == instructions.size - 1

    private fun handleInstruction(instruction: Instruction, currentIndex: Int): InstructionResult =
        when (instruction.name) {
            InstructionName.NOP -> {
                InstructionResult(0, currentIndex + 1)
            }
            InstructionName.JMP -> {
                InstructionResult(0, currentIndex + instruction.value)
            }
            InstructionName.ACC -> {
                InstructionResult(instruction.value, currentIndex + 1)
            }
        }
}

data class InstructionResult(val accumulatorDiff: Int, val newIndex: Int)

data class Instruction(val name: InstructionName, val value: Int) {
    fun invert() = when (name) {
        InstructionName.NOP -> {
            Instruction(InstructionName.JMP, value)
        }
        InstructionName.JMP -> {
            Instruction(InstructionName.NOP, value)
        }
        else -> {
            Instruction(name, value)
        }
    }
}

data class RunResult(val accumulator: Int, val isSuccess: Boolean)

enum class InstructionName {
    NOP, JMP, ACC
}
