import days.Day7
import spock.lang.Specification

class Day7Spec extends Specification {

    def day7 = new Day7()

    def "should solve part one"() {
        when:
        def result = day7.partOne()

        then:
        result == "164"

    }

    def "should solve part two"() {
        when:
        def result = day7.partTwo()

        then:
        result == "7872"
    }
}
