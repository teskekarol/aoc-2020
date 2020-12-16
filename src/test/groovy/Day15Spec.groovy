import days.Day15
import spock.lang.Specification

class Day15Spec extends Specification {

    def day15 = new Day15()

    def "should solve part one"() {
        when:
        def result = day15.partOne()

        then:
        result == "4315"

    }

    def "should solve part two"() {
        when:
        def result = day15.partTwo()

        then:
        result == "208"
    }

}
