package days

class Day4 : Day(4) {

    override fun partOne(): String {
        val input = inputAsString
        val passports = input.split("\n\n")

        return passports.map { isValid(it) }
            .count { it }
            .toString()
    }

    private fun isValid(p: String) = p.contains("byr:") &&
        p.contains("iyr:") &&
        p.contains("eyr:") &&
        p.contains("hgt:") &&
        p.contains("hcl:") &&
        p.contains("ecl:") &&
        p.contains("pid:")

    override fun partTwo(): String {
        val input = inputAsString
        val passports = input.split("\n\n")

        return passports.map { isMoreValid(it) }
            .count { it }
            .toString()
    }

    private fun isMoreValid(p: String): Boolean {
        try {
            val fields = p.split("[ \n]".toRegex())
                .filter { it != "" }
                .filter {
                    it.startsWith("byr:") ||
                        it.startsWith("iyr:") ||
                        it.startsWith("eyr:") ||
                        it.startsWith("hgt:") ||
                        it.startsWith("hcl:") ||
                        it.startsWith("ecl:") ||
                        it.startsWith("pid:")
                }

            if (hasValidFields(fields)) return false

            if (hasNotValidBirthday(fields)) return false

            if (hasNotValidIssue(fields)) return false

            if (hasNotValidExpiration(fields)) return false

            if (!hasValidHeight(fields)) return false

            if (hasNotValidColor(fields)) return false

            if (hasNotValidEye(fields)) return false

            if (hasNotValidPid(fields)) return false
        } catch (ex: Exception) {
            return false
        }

        return true
    }

    private fun hasValidHeight(fields: List<String>): Boolean {
        val validHeight = fields.first { it.startsWith("hgt:") }.substring(4)

        return when {
            validHeight.endsWith("in") -> {
                val toInt = validHeight.substring(0, 2).toInt()
                toInt in 59..76
            }
            validHeight.endsWith("cm") -> {
                val toInt = validHeight.substring(0, 3).toInt()
                toInt in 150..193
            }
            else -> return false
        }
    }

    private fun hasNotValidPid(fields: List<String>): Boolean {
        val validPid = fields.first { it.startsWith("pid:") }.substring(4)
        if (validPid.length != 9 || validPid.toLong() < 0) {
            return true
        }
        return false
    }

    private fun hasNotValidEye(fields: List<String>): Boolean {
        val validEye = fields.first { it.startsWith("ecl:") }.substring(4)
        if (!validEye.matches("amb|blu|brn|gry|grn|hzl|oth".toRegex())) {
            return true
        }
        return false
    }

    private fun hasNotValidColor(fields: List<String>): Boolean {
        val validColor = fields.first { it.startsWith("hcl:") }.substring(4)
        if (!validColor.matches(HEX_PATTERN)) {
            return true
        }
        return false
    }

    private fun hasNotValidExpiration(fields: List<String>): Boolean {
        val validExp = fields.first { it.startsWith("eyr:") }.substring(4).toInt()
        if (validExp !in 2020..2030) {
            return true
        }
        return false
    }

    private fun hasNotValidIssue(fields: List<String>): Boolean {
        val validIssue = fields.first { it.startsWith("iyr:") }.substring(4).toInt()
        if (validIssue !in 2010..2020) {
            return true
        }
        return false
    }

    private fun hasNotValidBirthday(fields: List<String>): Boolean {
        val validBirth = fields.first { it.startsWith("byr:") }.substring(4).toInt()
        if (validBirth !in 1920..2002) {
            return true
        }
        return false
    }

    private fun hasValidFields(fields: List<String>): Boolean {
        if (fields.size != 7) {
            return true
        }
        return false
    }

    companion object {
        val HEX_PATTERN = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$".toRegex()
    }

}
