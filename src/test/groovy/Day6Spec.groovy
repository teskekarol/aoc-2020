import days.Day6
import spock.lang.Specification

class Day6Spec extends Specification {

    def day6 = new Day6()

    def "should solve part one"() {
        when:
        def result = day6.partOne()

        then:
        result == "6351"

    }

    def "should solve part two"() {
        when:
        def result = day6.partTwo()

        then:
        result == "3143"
    }
}
