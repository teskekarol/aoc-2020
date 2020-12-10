import days.Day10
import spock.lang.Specification

class Day10Spec extends Specification {

    def day10 = new Day10()

    def "should solve part one"() {
        when:
        def result = day10.partOne()

        then:
        result == "220"

    }

    def "should solve part two"() {
        when:
        def result = day10.partTwo()

        then:
        result == "8"
    }
}
