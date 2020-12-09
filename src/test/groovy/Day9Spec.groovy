import days.Day9
import spock.lang.Specification

class Day9Spec extends Specification {

    def day9 = new Day9()

    def "should solve part one"() {
        when:
        def result = day9.partOne()

        then:
        result == "138879426"

    }

    def "should solve part two"() {
        when:
        def result = day9.partTwo()

        then:
        result == "23761694"
    }
}
