import days.Day3
import spock.lang.Specification

class Day3Spec extends Specification {

    def day3 = new Day3()

    def "should solve part one"() {
        when:
        def result = day3.partOne()

        then:
        result == "167"

    }

    def "should solve part two"(){
        when:
        def result = day3.partTwo()

        then:
        result == "736527114"
    }
}
