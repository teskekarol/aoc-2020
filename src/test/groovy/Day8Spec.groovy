import days.Day8
import spock.lang.Specification

class Day8Spec extends Specification {

    def day8 = new Day8()

    def "should solve part one"() {
        when:
        def result = day8.partOne()

        then:
        result == "1200"

    }

    def "should solve part two"() {
        when:
        def result = day8.partTwo()

        then:
        result == "1023"
    }
}
